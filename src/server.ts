import AppDataSource from './main/config/data_source'

AppDataSource.initialize().then(async () => {
    const app = (await import('./main/config/app')).default
    app.listen(3000, () => console.log('Running server ...'))
}
).catch(error => console.error())

