const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(PORT,
    ()=>{console.log(`it is alive on http://localhost:${PORT}`)})

    app.post('/calculate',(req,res)=>{
        let firstName = req.body.firstName;
        let secondName = req.body.secondName;

        if(!firstName){
            res.status(418).send({
                message:"first name required"
            })
        }

        if(!secondName){
            res.status(418).send({
                message:"second name required"
            })
        }


        let name1 =[ firstName.split('')]
        let name2 = [secondName.split('')]
        let name1length = name1.length
        let name2length = name2.length
        let intersection = performIntersection(name1,name2)
        let intLength = intersection.length
        let result =((intLength * 2)/(name1length + name2length)) * 100

        res.status(200).send({
            firstName:`${firstName}`,
            secondName:`${secondName}`,
            result:`${result}`
        })
        
    })


    function performIntersection(arr1, arr2) {

        // converting into Set
        const setA = new Set(arr1);
        const setB = new Set(arr2);
    
        let intersectionResult = [];
    
        for (let i of setB) {
        
            if (setA.has(i)) {
                intersectionResult.push(i);
            }
            
        }
        
        return intersectionResult;
    
    }