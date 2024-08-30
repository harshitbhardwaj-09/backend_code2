    const Chat = require('../models/Chat');

    const sendMessage = async (req, res) => {
    const { chatId, senderId, content } = req.body;

    try {
        const chat = await Chat.findById(chatId);
        if (!chat) return res.status(404).json({ message: 'Chat not found' });

        chat.messages.push({ sender: senderId, content });
        await chat.save();

        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    };

    module.exports = { sendMessage };
