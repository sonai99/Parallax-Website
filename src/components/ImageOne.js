import { Parallax } from 'react-parallax';
import img1 from '../img/img1.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={img1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">welcome</span>
        </div>
    </Parallax>
);

export default ImageOne