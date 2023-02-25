// import uniqid from 'uniqid'



const HobbyContainer = ({ hobby }) => (
  <div className='hobby'>
    <h5>{hobby.name}</h5>

    {/* <p className='project__description'>{hobby.description}</p> */}
    {/* {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}

    {hobby.image && (
      <img
        className='image'
        src={hobby.image}
        alt='Mushroom'
        // className='link link--icon'
      />
      
    )}

    {hobby.video && (
      <video controls loop autoPlay width="100%">
      <source src={hobby.video} type="video/mp4" />
      <track kind='captions'/>
      Sorry, your browser doesnt support embedded videos.
    </video>
    )}
  </div>
)
export default HobbyContainer;
