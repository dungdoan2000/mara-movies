import IconRating from '../assets/rating.png';
import IconRatingHalf from '../assets/rating-half.png';
import ImgTemp from '../assets/temp-1.jpeg';
import PlayButton from '../assets/play-button.png'

const Banner = () => {
    return (
        <div className="background w-full h-[700px] bg-cover bg-center 
            bg-no-repeat bg-center relative p-3">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className='flex flex-col space-y-5 items-baseline flex-1'>
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-400 py-2 px-3 text-md">
                        TV Show
                    </p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl text-white font-bold">Nghe nói em thích tôi</h2>
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt="rating" className='w-8 h-8' />
                            <img src={IconRating} alt="rating" className='w-8 h-8' />
                            <img src={IconRating} alt="rating" className='w-8 h-8' />
                            <img src={IconRating} alt="rating" className='w-8 h-8' />
                            <img src={IconRatingHalf} alt="rating" className='w-8 h-8' />
                        </div>
                        <p className='text-white line-clamp-5'>
                            Sau bảy năm xa nhà, Nguyễn Lưu Tranh trở lại thành phố nơi cô lớn lên và trở thành bác sĩ bồi dưỡng nghiệp vụ tại khoa Ngoại Thần kinh của bệnh viện Bắc Nhã. Để có thể ở lại Bắc Nhã, Nguyễn Lưu Tranh đã dồn hết sức mình vào công việc. Có điều chồng cũ của cô - Ninh Chí Khiêm là bác sĩ khoa Ngoại Thần kinh giỏi nhất ở Bắc Nhã, anh ấy đã chủ động làm thầy hướng dẫn cho Nguyễn Lưu Tranh và truyền thụ mọi thứ có thể cho cô chỉ để bù đắp cho những tổn thương từ cuộc hôn nhân thất bại mà anh gây ra. Thế nhưng Nguyễn Lưu Tranh đã không còn là cô gái yếu đuối nhút nhát năm nào, dù là chữa bệnh cứu người hay đối diện với vấn đề tình cảm, cô đều có thể gánh vác và giữ vững sự kiên định của mình. Trong công việc, họ tranh cãi, giảng hòa và sát cánh bên nhau, sợi tơ hồng vận mệnh liên kết giữa họ chưa bao giờ bị cắt đứt. Hưởng ứng lời kêu gọi của Tổ quốc, họ đã tham gia đội y tế tình nguyện châu Phi. Trong quá trình cấp cứu bệnh nhân, Ninh Chí Khiêm bị đạn lạc bắn trọng thương, Nguyễn Lưu Tranh đã kiên trì cứu anh từ cõi chết trở về. Sau khi trải qua thử thách sinh tử, họ đã hiểu rõ hơn về cuộc sống và sinh mệnh, từ đó bắt đầu một mối quan hệ mới.
                        </p>
                        <div className='flex items-center space-x-4'>
                            <button className='p-2 text-white bg-black font-bold text-sm'>Chi Tiết</button>
                            <button className='p-2 text-white bg-red-600 font-bold text-sm'>Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img src={ImgTemp} alt="temp" className='w-full h-full object-cover' />
                        <div className='w-full h-full absolute top-0 left-0 flex items-center
                        justify-center backdrop-blur-sm 
                        opacity-0 group-hover:opacity-90 duration-300'>
                            <img src={PlayButton} alt="play" className='w-16 h-16 relative z-20'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;