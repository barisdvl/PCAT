const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo 1 Title',
  description: 'Photo 1 description',
}); */

//read a photo
const readData = Photo.find({}, (err, data) => {
  console.log(data);
});
//readData

//update a photo
/* const id = '61ceffff3cfdc1fab09b15ed';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo 1 title updated',
    description: 'Photo 1 description updated',
  },
  {
      new: true
  },
  (err, data) => {
    console.log(data);
  }
); */

//delete a photo
const id = '61d04fae4af04a96f9816715'
Photo.findByIdAndDelete(id, (err,data) => {
    console.log("Photo is removed...")
    readData    
})
