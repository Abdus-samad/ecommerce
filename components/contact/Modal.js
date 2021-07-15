import { XIcon } from "@heroicons/react/solid"

const Modal = ({open, close }) => {
if (!open) return null

	return (
		<div className='backdrop flex justify-center items-center overflow-hidden'>
			<button onClick={close} className='Close'><XIcon className='h-8 w-8' /></button>
		<div className='Mcon overflow-hidden'>
			<div className='Modal overflow-hidden'>
				<form>
					<h2 className='text-lg font-bold text-gray-800 mb-4'>Edit Contact</h2>
					<div className='w-full flex flex-col mb-4'>
							<input type="text" className='input' />
					</div>
					<button style={{width: '100%', height:'44px'}} className='ModalBtn'>Save Contact</button>
				</form>
			</div>
		</div>
			
		</div>
	)
}

export default Modal

// position: fixed;
// top: 10px;
// right: 20px;
// display: -webkit-inline-flex;
// display: -moz-inline-box;
// display: inline-flex;
// -webkit-align-items: center;
// -moz-box-align: center;
// align-items: center;
// -webkit-justify-content: center;
// -moz-box-pack: center;
// justify-content: center;
// width: 30px;
// height: 30px;
// color: #fff;
// background-color: transparent;
// outline: 0;
// border: 0;
// cursor: pointer;
// z-index: 9999999;