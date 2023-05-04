import Tour from '../models/Tour.js';

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: 'Tour created successfully',
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create tour. Please try again.',
    });
  }
};

//update tour
export const updateTour = async (req, res) =>{

  const id = req.params.id
  try{

    const updateTour = await Tour.findByIdAndUpdate(id,{
      $set:req.body
    },{new:true})

    res.status(200).json({
      success: true,
      message: 'successfully updated',
      data: updateTour,
    });

  }catch (err){
    res.status(500).json({
      success: false,
      message: 'failed to update',
    });

  }
};
//deleteTour tour
export const deleteTour = async (req, res) =>{
  const id = req.params.id
  try{

    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'successfully deleted',
    });

  }catch (err){
    res.status(500).json({
      success: false,
      message: 'failed to delete',
    });

  }
};
//getSingleTour
export const getSingleTour = async (req, res) =>{
  const id = req.params.id
  try{

    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: 'successfully',
      data:tour
    });

  }catch (err){
    res.status(404).json({
      success: false,
      message: 'not found',
    });

  }
};
//getAllTour
export const getAllTour = async (req, res) =>{

  //for pagination
  const page = parseInt(req.query.page)

  try{

    const tour = await Tour.find({})
    .skip(page *8) .limit(8);

    res.status(200).json({success: true, count:tour.length, message: 'successful', data: tour});

  }catch (err){
    res.status(404).json({
      success: false,
      message: 'not found',
    });


  }
};


//get tour by search
export const getTourBySearch = async(req, res)=>{
  const destination = parseInt(req.query.destination) // hear 'i' mean case sensitive
  const duration = parseInt(req.query.duration)
  const maxGroupSize = parseInt(req.query.maxGroupSize)
  const specialty = parseInt(req.query.specialty)


try{
  //gte means grater than or equals
    const tours =  await Tour.find({
    destination:{$gte:destination}, 
    duration:{$gte:duration},
    maxGroupSize:{$gte:maxGroupSize},
    specialty:{$gte:specialty} })

    res.status(200).json({
    success: true, 
    message: 'successful',
    data: tours,
  });

}catch (err){
  res.status(404).json({
    success: false,
    message: 'not found',
  });

}

};


//get featured  tour
export const getFeaturedTour = async (req, res) =>{

  try{

    const tour = await Tour.find({featured:true}).limit(8); 
    res.status(200).json({
      success: true, message: 'successful', 
      data: tour
    
    });

  }catch (err){
    res.status(404).json({
      success: false,
      message: 'not found',
    });


  }
};


//get tour counts

export const getTourCount = async (req, res)=>{
  try{
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({success:true, data: tourCount});
  
  }catch (err){
    res.status(500).json({success:false, message: "failed to fetch"});
  }
}