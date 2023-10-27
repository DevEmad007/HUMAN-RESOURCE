import React,{ useState } from 'react';

const UploadForm = () => {
    const [ imageUrl,setImageUrl ] = useState();
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

    return (
        <form className={`w-full px-6  ${imageUrl !== undefined ? 'mt-4' : 'pt-16'}`} method="post">
            <div className='m-8'>
                {imageUrl !== undefined && <img className='w-full h-60 bg-red-600 object-cover' src={imageUrl} alt='kfs' />}
            </div>
            <div className='grid my-6'>
                <label className='font-semibold bg-gray-300 py-1 px-3 rounded-md ' htmlFor="uploadImage" >Upload Image</label>
                <input hidden id='uploadImage' required className="imgUpload" type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Name">Name</label>
                <input className='pl-2 py-2 rounded-md' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Tag Line">Tag Line</label>
                <input className='pl-2 py-2 rounded-md' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Description">Description</label>
                <textarea className='pl-2 py-2 rounded-md resize-y' type="text" />
            </div>
            <div className='grid my-6'>
                <label className='mb-2 font-semibold text-lg ' htmlFor="Price">Price</label>
                <input className='pl-2 py-2 rounded-md resize-y' type="tel" />
            </div>

        </form>
    );
};

export default UploadForm;