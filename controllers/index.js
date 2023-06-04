

const homeController = async (req, res) => {

    try{
        return res.json({"message":"index"})
    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const adminUserController = async (req, res) => {

    try{
        return res.json(true) 
    } catch (error){
        console.log(error)
    }
}



module.exports = {
    homeController,
    adminUserController
}

