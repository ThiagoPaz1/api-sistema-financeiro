import 'reflect-metadata';
import app from './app';

const PORT = process.env.PORT || (8089 as number);
app.listen(PORT, () => console.log(`Acesse no endpoint: http://localhost:${PORT}`));
