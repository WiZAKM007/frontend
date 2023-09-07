export default function handler(req, res) {
    res.status(200).json([
        {id: '1', firstname: 'Sitthachon', lastname: 'Lapwamg', username: 'Winz', password: '123456',status: 'admin'}, 
        {id: '2', firstname: 'สิทธชน', lastname: 'เลาว่าง', username: 'Winz', password: '123456',status: 'user'}
    ]);
}