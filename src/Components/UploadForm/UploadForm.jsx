import React,{ useRef,useState } from 'react';
import ReactCrop from 'react-image-crop';

const UploadForm = () => {
    const [ imageUrl,setImageUrl ] = useState('');
    const [ img,setImg ] = useState();


    const handleFileChange = (e) => {
        const file = e.target.files[ 0 ];
        if (file.size > 1000000) {
            alert('The file is too large.');
            this.value = '';
        }
        setImg(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const [ croppedImage,setCroppedImage ] = useState({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    });

    function onCropChange(crop) {
        setCroppedImage(crop);
        onComplete(); // Added this line to fix the logic error
    }

    function onComplete() {
        const croppedImageElement = ReactCrop.getCroppedImage(croppedImage);
        // Do something with the cropped image element...
    }

    return (
        <form className={`w-full px-6  ${imageUrl !== undefined ? 'mt-4' : 'pt-16'}`} method="post">
            <div className='m-8 pt-8'>
                {/* {imageUrl !== undefined && <img className='w-full  bg-red-600 object-cover' src={imageUrl} alt='kfs' />} */}
                <input
                    type="file"
                    onChange={(e) => setImageUrl(e.target.files[ 0 ].src)}
                />
                <ReactCrop
                    src={imageUrl}
                    crop={croppedImage}
                    onCropChange={onCropChange}
                    onComplete={onComplete}
                />
            </div>
            <div className='grid my-6'>
                <label className='py-1 px-3 text-center text-lg font-semibold bg-gray-300 dark:bg-slate-500  rounded-md ' htmlFor="uploadImage" >Upload Image</label>
                <input hidden id='uploadImage' required className="imgUpload" type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Name">Name</label>
                <input className='pl-2 py-2 rounded-md dark:bg-slate-800 dark:border-slate-100 border-2' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Tag Line">Tag Line</label>
                <input className='pl-2 py-2 rounded-md dark:bg-slate-800 dark:border-slate-100 border-2' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Description">Description</label>
                <textarea className='pl-2 py-2 rounded-md resize-y dark:bg-slate-800 dark:border-slate-100 border-2' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Price">Price</label>
                <input className='pl-2 py-2 rounded-md resize-y dark:bg-slate-800 dark:border-slate-100 border-2' type="tel" />
            </div>

        </form>
    );
};

export default UploadForm;