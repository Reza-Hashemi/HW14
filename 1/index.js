const { count } = require("console");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/store");
const Products = mongoose.model("product", {
  type: "string",
  title: "string",
  description: "string",
  shipping: {
    weight: "number",
    dimensions: {
      width: "number",
      height: "number",
      depth: "number",
    },
  },
  pricing: {
    list: "number",
    retail: "number",
    savings: "number",
    pct_savings: "number",
  },
  details: {
    title: "string",
    artist: "string",
    genre: ["string"],
    tracks: ["string"],
  },
});

////==========================1-A==========================================

// Products.insertMany({
//     type: "Audio Album",
//     title: "A Love Supreme",
//     description: "by John Coltrane",
//     shipping: {
//       weight: 6,
//       dimensions: {
//         width: 10,
//         height: 10,
//         depth: 1
//       }
//     },
//     pricing: {
//       list: 1200,
//       retail: 1100,
//       savings: 100,
//       pct_savings: 8
//     },
//     details: {
//       title: "A Love Supreme [Original Recording Reissued]",
//       artist: "John Coltrane",
//       genre: ["Jazz", "General"],
//       tracks: [
//         "A Love Supreme Part I: Acknowledgement",
//         "A Love Supreme Part II - Resolution",
//         "A Love Supreme, Part III: Pursuance",
//         "A Love Supreme, Part IV-Psalm"
//       ]
//     }
//   }, (err, result) =>{
//       if (err){
//           return console.log(err);
//       }
//       console.log(result);
//   })

//=============================================1-B=============================================================

//   Products.insertMany([
//       {
//       type: "Audio Album",
//       title: "BlackStar",
//       description: "BlackStar is the twenty-fifth and final studio album by English musician David Bowie. It was released worldwide through ISO, RCA, Columbia, and Sony on 8 January 2016, coinciding with Bowie's 69th birthday",
//       shipping: {
//         weight: 8,
//         dimensions: {
//           width: 15,
//           height: 15,
//           depth: 1
//         }
//       },
//       pricing: {
//         list: 1450,
//         retail: 2450,
//         savings: 110,
//         pct_savings: 5
//       },
//       details: {
//         title: "BlackStar [Original Recording Reissued]",
//         artist: "David Bowie",
//         genre: ["Experimental rock", "Art rock", "Avant-garde jazz"],
//         tracks: [
//           "Blackstar",
//           "'Tis a Pity She Was a Whore",
//           "Lazarus",
//           "Sue (Or in a Season of Crime)",
//           "Girl Loves Me",
//           "Dollar Days",
//           "I Can't Give Everything Away"
//         ]
//       }
//     },
//     {
//       type: "Audio Album",
//       title: "Funeral",
//       description: "Funeral is the debut studio album by Canadian indie rock band Arcade Fire, released on September 14, 2004 by Merge Records.",
//       shipping: {
//         weight: 10,
//         dimensions: {
//           width: 12,
//           height: 10,
//           depth: 1
//         }
//       },
//       pricing: {
//         list: 2450,
//         retail: 3450,
//         savings: 310,
//         pct_savings: 2
//       },
//       details: {
//         title: "Funeral [Original Recording Reissued]",
//         artist: "Arcade Fire",
//         genre: ["Indie rock", "Alternative rock", "Art rock", "Baroque pop", "Rock"],
//         tracks: [
//           "Neighborhood #1 (Tunnels)",
//           "Neighborhood #2 (Laïka)",
//           "Une année sans lumière",
//           "Crown of Love",
//           "Wake Up",
//           "Haiti",
//           "Rebellion (Lies)"
//         ]
//       }
//     },
//     {
//       type: "Film",
//       shipping: {
//         weight: 10,
//         dimensions: {
//           width: 20,
//           height: 30,
//           depth: 1
//         }
//       },
//       pricing: {
//         list: 2200,
//         retail: 5100,
//         savings: 200,
//         pct_savings: 10
//       },
//       details: {
//         title: "The Matrix",
//         director: ["Andy Wachowski", "Larry Wachowski"],
//         writer: ["Andy Wachowski", "Larry Wachowski"],
//         aspect_ratio: "1.66:1"
//       }
//     },
//     {
//       type: "Film",
//       shipping: {
//         weight: 25,
//         dimensions: {
//           width: 12,
//           height: 21,
//           depth: 2
//         }
//       },
//       pricing: {
//         list: 5200,
//         retail: 10100,
//         savings: 500,
//         pct_savings: 15
//       },
//       details: {
//         title: "InterStellar",
//         director: ["Christopher Nolan"],
//         writer: ["Christopher Nolan", "Jonathan Nolan"],
//         aspect_ratio: "1.33:1"
//       }
//     },
//     {
//       type: "Film",
//       shipping: {
//         weight: 18,
//         dimensions: {
//           width: 16,
//           height: 16,
//           depth: 1
//         }
//       },
//       pricing: {
//         list: 7100,
//         retail: 8000,
//         savings: 429,
//         pct_savings: 9
//       },
//       details: {
//         title: "Inception",
//         director: ["Christopher Nolan"],
//         writer: ["Christopher Nolan"],
//         aspect_ratio: "1.50:1"
//       }
//     }
// ]).then(function(){
//     console.log("data inserted");
// }).catch(function(err){
//     console.log(err);
// });

//=============================================1-3-A==========================================

// Products.find({}, (err,result) =>{
//     if(err) throw err;
//     console.log(result);
// });
//=============================================1-3-B==========================================

// Products.find({}, (err,result) =>{
//     if(err) throw err;
//     console.log(result);
// }).pretty();

//=============================================1-3-C==========================================

// Products.find({},{_id : 0}, (err,result) =>{
//     if (err) throw err;
//     console.log(result);
// });

//=============================================1-3-D==========================================

// Products.find({type : "Audio Album"}, (err,result) =>{
//     if (err) throw err;
//     console.log(result);
// })

//=============================================1-3-E==========================================

// Products.find({"pricing.retail":{$gte:5000}}, (err,result) =>{
//         if (err) throw err;
//         console.log(result);
//     })

//=============================================1-3-F==========================================

// Products.find({type :{$ne:"Film"}}, (err,result) =>{
//     if(err) throw err;
//     console.log(result);
// })

//=============================================1-3-G==========================================

// Products.find({"shipping.weight" : {$gte :15}} , (err, result) =>{
//     if(err) throw err;
//     console.log(result);
// })

//=============================================1-3-H==========================================

// Products.updateOne({"details.title" : "The Matrix"},{$set:{"pricing.list":2500}} , (err, result) =>{
//     if (err) throw err;
//     console.log(result);
// })

//=============================================1-3-I==========================================

// Products.find({"type":{$eq:"Film"},"shipping.dimensions.depth":{$eq:1}} , (err, result) =>{
//     if(err) throw err;
//     console.log(result);
// })

//=============================================1-3-J==========================================
//  Products.find({type :"Film"} , (err, result) =>{
//     if(err) throw err;
//     console.log(result);

// }).count()

//=============================================1-3-K==========================================
//************ */
// Products.find(
//   { "details.writer": { $regex: "Jonathan Nolan" } },
//   (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   }
// );
//=============================================1-3-L==========================================

// Products.find({}).sort({"pricing.savings" :-1}).limit(1).then(result =>{
//     console.log(result);
// })
//=============================================1-3-M==========================================


// Products.find({"details.title" :{$regex :"x"}}, (err, result) =>{
//     if(err) throw err;
//     console.log(result);
// })

//=============================================1-3-N==========================================

// Products.deleteOne({"details.aspect_ratio" : "1.66:1"} , (err, result) =>{
//     if(err) throw err
//     console.log(result);
// })



