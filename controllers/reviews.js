const Review = require("../models/review")
const User = require("../models/User")

const addReviewController = async (req, res) => {

    try{

        const body = req.body

        let review = await Review.findOne({
            where:{
                doctor_id: req.params.id,
                user_id: req.userId
            }
        })

        // Check if the user is trying to add more than review for the same doctor
        if (review){
            return res.status(400).send({Message:"You cannot add more than one review for the same doctor"})
        }

        review = await Review.create({
            doctor_id: req.params.id,
            user_id: req.userId,
            rate: body.rate,
            description: body.description,
            date_added: new Date()
        })

        await review.save()

        return res.json(review)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

const deleteReviewController = async (req, res) => {

    try{

        await Review.destroy({
            where:{
                user_id: req.userId,
                doctor_id: req.params.id
            }
        })

        return res.json(true)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Review not found" });
    }

}

const updateReviewController = async (req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const getReviewByIDController = async (req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const getDoctorReviewsController = async (req, res) => {

    try{

        const reviews = await Review.findAll({
            where:{
                doctor_id: req.params.id
            }
        })

        const result = await Promise.all(reviews.map( async review => {

            const user = await User.findOne({
                where: {
                    userId: review.user_id
                },
                attributes: ['username']
            })

            return {...review.dataValues, user}
        }))

        return res.json(result)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

module.exports = {
    addReviewController,
    updateReviewController,
    deleteReviewController,
    getDoctorReviewsController,
    getReviewByIDController
}