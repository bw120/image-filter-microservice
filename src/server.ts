import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { promises } from 'dns';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  app.get( "/filteredimage", async ( req, res ) => {
    const { image_url:imageUrl } = req.query;
    const urlRegex = new RegExp(/^(https?):\/\/[^\s$.?#].[^\s]*$/, 'g');
    const isValidImageUrl = urlRegex.test(imageUrl);

    if (!isValidImageUrl) {
      res.status(400).send("'image_url' is required and must be a valid url for an image");
    }

    try {
      let image = await filterImageFromURL(imageUrl)
      res.status(200).sendFile(image);
      res.on('finish', () => deleteLocalFiles([image]));
    } catch(err) {
      return res.status(422).send("There was an error processing the image. Check that your URL is a valid image and that it is in a supported format: jpg, png, bmp, tiff, or gif");
    }
  } );

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();