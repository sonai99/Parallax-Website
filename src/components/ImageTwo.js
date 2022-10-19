import { Parallax } from 'react-parallax';
import img2 from '../img/img2.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} speed={-5} bgImage={img2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">welcome</span>
        </div>
    </Parallax>
);

export default ImageTwo