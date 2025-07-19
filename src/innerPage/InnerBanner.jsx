
import innerImage from '/assets/inner.webp'

const InnerBanner = ({title}) => {
  return (
    <div>
         <div className="max-w-[75rem] m-auto pt-[120px] lg:px-0 px-4 lg:mt-0  ">
      <div className="relative z-[-99]">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)),url(${innerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundPosition: "center",
            borderRadius: "1.125rem 1.125rem 0 1.125rem",
            // backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          className="p-4 h-[36rem]   lg:h-[45rem] bg-black rounded-4xl flex flex-col justify-between"
        >
          <div className="flex flex-row gap-2 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16 7.57143V16H10.4C6.47273 16 4.8 15.7143 2.76364 14.4286C0.945455 13.2143 0 11 0 8.07143C0 4.07143 2.69091 0 8.58182 0C13.4545 0 16 2.64286 16 7.57143ZM11.7091 8C11.7091 4.92857 10.6182 3.42857 8.14545 3.42857C5.67273 3.42857 4.14545 5.21429 4.14545 7.85714C4.14545 11.0714 5.74545 12.5 9.23636 12.5H11.7091V8Z"></path>
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="chakra-icon css-10x9cef"
              role="presentation"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.06094 20.3872C8.65797 20.7902 8.00463 20.7902 7.60166 20.3872C7.1987 19.9842 7.1987 19.3309 7.60166 18.9279L14.1685 12.3611L7.60171 5.79434C7.19875 5.39137 7.19875 4.73803 7.60171 4.33506C8.00468 3.9321 8.65802 3.93209 9.06099 4.33506L16.3572 11.6313C16.5958 11.8698 16.6931 12.1961 16.6493 12.5062C16.6191 12.7201 16.5217 12.9264 16.3572 13.0909L9.06094 20.3872Z"
              ></path>
            </svg>
            <span  className="text-white ">{title}</span>
          </div>
          <div className="text-white my-auto p-4">
            <h6  className="text-4xl ">{title}</h6>
            <h3 className="text-lg font-light">
              Energy security for a more-sustainable world.
            </h3>
          </div>
        </div>
      </div>{" "}
    </div>
    </div>
  )
}

export default InnerBanner