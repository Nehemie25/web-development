import Footer from './'
import {ThemeProvider} from '../../utils/context'
import {render, screen, fireEvent} from '@testing-library/react'

describe('Footer', ()=>{
	it('should render the footer without crash', async ()=>{

	
	render(
	<ThemeProvider>
	<Footer/>
	</ThemeProvider>
	)

	

	
	
	const nightModeButton = screen.getByRole('button')

	expect(nightModeButton.textContent).toEqual('Changer de mode 🌙')
	fireEvent.click(nightModeButton)

	expect(nightModeButton.textContent).toEqual('Changer de mode ☀️')

})
	

})