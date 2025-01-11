import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0000",
    database:"database_project"
})

app.get("/properties",(req,res)=>{
    const sql1 = "SELECT PropertyName,url FROM properties INNER JOIN propertyphotos ON properties.PropertyID=propertyphotos.PropertyID";
    const sql2= "SELECT * FROM properties";
    db.query(sql1,(err,pp)=>{
        if(err){
            return res.json("error")
        }
    
        db.query(sql2,(err,p)=>{
            if(err){
                console.log("error")
            }
            res.json({pp,p});
        })
        
    })
    
})

app.get("/info",(req,res)=>{
    const PropertyName = req.query.PropertyName;
    const sql3 = "SELECT * FROM properties WHERE PropertyName= ?";
    const sql4 = "SELECT url FROM propertyphotos INNER JOIN  properties ON properties.PropertyID=propertyphotos.PropertyID where PropertyName= ?;"
    const sql5 = "select PropertyName , amenity_name from properties inner join rooms on properties.PropertyID = rooms.PropertyID inner join amenities on amenities.room_id = rooms.room_id where PropertyName= ?"
    db.query(sql3,[PropertyName],(err, propInfo) => {
        if (err) {
          console.log("error")
        } else {
            db.query(sql4,[PropertyName],(err,propPhotos)=>{
                if (err) {
                    console.log("error")
                  } 
                else {
                    db.query(sql5,[PropertyName],(err,propAmenities)=>{
                        if(err){
                            console.log("error");

                        }
                        else{
                            res.json({propInfo,propPhotos,propAmenities})
                        }
                    })
                }
            })
          
        }
    });
    

})

app.get("/",(req,res)=>{
    const sql6 = "select Location,count(*) as count from properties group by Location"
    db.query(sql6 , (err,noOfProps)=>{
        if(err){
            console.log("error");
        }
        else{
            res.json(noOfProps);
        }
    })
});


app.listen(5000,()=>{
    console.log("listening")
})
