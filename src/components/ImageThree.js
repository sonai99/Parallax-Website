import { Parallax } from 'react-parallax';
import img3 from '../img/img3.jpg'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={img3} speed={5} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">welcome</span>
        </div>
    </Parallax>
);

export default ImageThree