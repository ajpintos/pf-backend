const getUsersHandler = async (req, res) => {
    try {
        const allUsers = await Activity.findAll();
        res.status(200).send(allActivities);
    } catch (error) {
        console.error('Error al mostrar las Activities:', error);
    }
}