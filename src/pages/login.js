import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <>
                <div className="bg-[#F4F0F0] w-full h-full flex justify-center items-center">
                    <div className="bg-white w-[500px] h-[660px] rounded-[25px] flex flex-col">
                        <div>
                            <h1 className="text-black text-[50px] text-center mt-[50px]">로그인</h1>
                        </div>
                        <form className="mt-[100px]">
                            <div className='ml-[60px]'>
                                <label className="text-[30px]">ID</label>
                                <input type="text" className="text-[20px] ml-[10px] border-b-2 border-[#7E7E7E] w-[320px] focus:outline-none focus:border-[#529EE3]"/>
                            </div>
                            <div className="w-full flex flex-row ml-[60px] mt-[40px]">
                                <svg width="30" height="30" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5312 3.0625C27.5549 3.06201 25.6059 3.56562 23.8405 4.53297C22.0751 5.50033 20.5423 6.90453 19.365 8.63306C18.1877 10.3616 17.3986 12.3664 17.0609 14.4868C16.7233 16.6071 16.8465 18.7842 17.4206 20.8434L2.8125 36.75V45.9375H11.25L25.8581 30.0309C27.5989 30.6062 29.4332 30.7662 31.2359 30.4999C33.0386 30.2335 34.7674 29.5471 36.3044 28.4874C37.8415 27.4278 39.1507 26.0197 40.1428 24.3593C41.1349 22.6988 41.7866 20.825 42.0535 18.8655C42.3204 16.906 42.1962 14.9069 41.6894 13.0044C41.1825 11.1018 40.305 9.34068 39.1165 7.84086C37.9281 6.34104 36.4567 5.13784 34.8025 4.31324C33.1484 3.48865 31.3505 3.06204 29.5312 3.0625V3.0625ZM29.5312 27.5625C28.5631 27.5619 27.6002 27.4061 26.6738 27.1001L25.0608 26.5672L23.8697 27.8642L19.3964 32.7351L17.4572 30.625L15.4688 32.7902L17.408 34.9018L15.1777 37.3303L13.2384 35.2188L11.25 37.3839L13.1892 39.4955L10.0856 42.875H5.625V38.0179L19.4091 23.0086L20.6016 21.7116L20.1122 19.9552C19.5111 17.7977 19.5502 15.4887 20.2238 13.3567C20.8974 11.2248 22.1712 9.37834 23.8641 8.08014C25.557 6.78194 27.5827 6.09808 29.6532 6.12581C31.7236 6.15355 33.7333 6.89148 35.3963 8.23463C37.0594 9.57779 38.2911 11.4578 38.9163 13.6071C39.5416 15.7565 39.5284 18.0659 38.8788 20.2067C38.2292 22.3474 36.9761 24.2107 35.2979 25.5313C33.6197 26.8519 31.6018 27.5627 29.5312 27.5625V27.5625Z" fill="black"/>
                                    <path d="M30.9375 18.375C32.4908 18.375 33.75 17.0039 33.75 15.3125C33.75 13.6211 32.4908 12.25 30.9375 12.25C29.3842 12.25 28.125 13.6211 28.125 15.3125C28.125 17.0039 29.3842 18.375 30.9375 18.375Z" fill="black"/>
                                </svg>
                                <input type="text" className="text-[20px] ml-[10px] border-b-2 border-[#7E7E7E] w-[320px] focus:outline-none focus:border-[#529EE3]"/>
                            </div>
                            <div className="w-full h-fit flex justify-center mt-[80px]">
                                <input type="submit" className="bg-[#69AEFF] w-[320px] h-[70px] text-white text-[30px] rounded-full" value="로그인"/>
                            </div>
                        </form>
                        <div className="flex flex-col text-center mt-[20px] text-[#529EE3] underline">
                            <a href="">비밀번호를 잊으셨나요?</a>
                            <a href="">계정을 생성하려면 여기를 클릭하세요!</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login