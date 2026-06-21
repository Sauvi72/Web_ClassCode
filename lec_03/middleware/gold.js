const gold = (req,res,next) =>{
    console.log("clients are gold premium service availed");
    next() ;
}

module.exports = gold;