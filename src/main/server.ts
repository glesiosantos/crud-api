import app from './config/app'
import AppDataSource from './config/data_source'

// AppDataSource.initialize().then(() => {

// }).catch((error) => console.log(error))

app.listen(3000, () => console.log('Running server ...'))
