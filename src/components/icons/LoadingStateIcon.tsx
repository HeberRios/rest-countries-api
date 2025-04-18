export function LoadingStateIcon() {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      fill='currentColor'
    >
      <style>
        {`
				.spinner_d9Sa {
					transform-origin: center;
				}
				.spinner_qQQY {
					animation: spinner_ZpfF 9s linear infinite;
				}
				.spinner_pote {
					animation: spinner_ZpfF 0.75s linear infinite;
				}
				@keyframes spinner_ZpfF {
					100% {
						transform: rotate(360deg);
					}
				}
			`}
      </style>
      <path d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z' />
      <rect
        className='spinner_d9Sa spinner_qQQY'
        x='11'
        y='6'
        rx='1'
        width='2'
        height='7'
      />
      <rect
        className='spinner_d9Sa spinner_pote'
        x='11'
        y='11'
        rx='1'
        width='2'
        height='9'
      />
    </svg>
  );
}
