import app from './app';

const PORT = process.env.PORT || 8189 as number
app.listen(PORT, () => console.log(`Acesse no endpoint: http://localhost:${PORT}`))
