import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/animais', async (req,res)=>{

    await prisma.animais.create({
        data:{
            nome: req.body.nome,
            localizacao: req.body.localizacao
        }
    })

    res.status(201).json(req.body)

})

app.get('/animais', async(req, res)=>{

    const animais = await prisma.animais.findMany()

    res.status(200).json(animais)
})

app.put('/animais/:id', async (req,res)=>{

    await prisma.animais.update({
        where:{
            id: req.params.id
        },
        data:{
            nome: req.body.nome,
            localizacao: req.body.localizacao
        }
    })

    res.status(201).json(req.body)

})

app.listen(3000)