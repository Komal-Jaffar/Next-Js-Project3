import Image from "next/image"


function about() {
  return (
    <div>
    <div className="bg-purple-400 p-[25px] my-[10px] text-[36px]">

    <div className="flex">
        <Image 
      src={require('../../public/images/W-ABAYAS.webp')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10"/>



<Image 
      src={require('../../public/images/brown abaya.jpg')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10"/>


<Image 
      src={require('../../public/images/abk fashion.jpg')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10 "/>


<Image 
      src={require('../../public/images/gray abaya.jpg')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10 "/>

      
<Image 
      src={require('../../public/images/pink abaya.jpg')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10 "/>



</div><br></br>
 <main> 
          <div className="bg-purple-300"><b>
          WELCOME TO HIJAB COLLECTION</b></div>
          <br></br>
         <div className="bg-purple-300">  <b> Welcome to our exclusive collection of abayas, where tradition meets modernity. 
Each piece is crafted with care, blending timeless elegance with contemporary design. 
Our abayas are made from premium fabrics, ensuring a perfect balance of comfort and style for any occasion.
 Whether you're looking for a simple, everyday abaya or a luxurious piece for special events, our range has 
 something to offer for everyone.
</b></div></main>
<br></br>

  <div className="bg-purple-300">
         <b> Explore a variety of colors, patterns, and styles that suit your unique taste.
 From classic black to modern shades and embroidered details, each abaya is designed to 
 enhance your personality while respecting traditional values. Perfect for work, gatherings,
  or casual outings, our abayas are versatile and adaptable to any setting. Discover the beauty 
  of modest fashion with our collection, where every abaya tells a story of elegance and grace.
  </b></div>
  <br></br>
  <div className="bg-purple-700">
    THANKYOU FOR VISITING OUR WEBSITE!
  </div>
</div>  
    </div>
  )
}

export default about