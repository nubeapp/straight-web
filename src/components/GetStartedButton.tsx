const RightArrow = () => (
    <svg className="w-[16px] h-[16px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
)

export function GetStartedButton() {

    return (
        <div>
            <a
                // onClick={() => console.log("Get Started!")}
                href="/dashboard"
                className="flex flex-row gap-2 items-center justify-center py-2 px-4 font-small dark:text-blue-500 max-w-[200px] min-h-[40px] h-full block bg-blue-600 text-white hover:bg-blue-700 text-sm rounded-full hover:shadow-md"
            >
                <RightArrow />
                <div>Get Started</div>
            </a>
        </div>
    );
};
