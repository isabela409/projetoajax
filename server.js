const bodyParser = require("body-parser") // biblioteca que acabamos de instalar
const express = require("express") // biblioteca que acabamos de instalar
const app = express // criar o servidor do app da biblioteca 

app.request(express.static('.')) // criar servidor
app.request(bodyParser,bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json()) // middleware para ler dados do corpo da requisição(formulários)
const multer = require("multer") //middleware para lidar com o uploads de arquivos

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, '${Date.now()}_${file.originalname}')
    }
})// Rota post que recebe um arquivo

const upload = multer({storage }).single('arquivo')
// para salvar o arquivo no destino correto

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(arr){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => 
    console.log('Executadando...')
)// coloca o servidor para rodar na porta 8080.