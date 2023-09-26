
const HomePage = async (req, res) => {
    try {
        res.json({
            status: 'success',
            message: 'Home page accessed',
        });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Login failed' });
    }
}

module.exports = HomePage;