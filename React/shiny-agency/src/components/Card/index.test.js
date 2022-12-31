import  Card  from './'
import {render, screen, fireEvent} from '@testing-library/react'
import {ThemeProvider} from '../../utils/context'

describe('Card testing', ()=>{
	it('should render the card without crash', async ()=>{

	
	render(
	<ThemeProvider>
	<Card
	     label ="Nehemie"
	     title = "software"
	     picture ="/zozor.png"

	/>
	</ThemeProvider>
	)

	

	
	
	const titre = screen.getByTestId('title')
	const picture = screen.getByRole('img')

	expect(titre.textContent).toEqual('software')
	expect(picture.src).toEqual('http://localhost/zozor.png')


})
it('should add star to the job title', async ()=>{

	render(
	<ThemeProvider>
	<Card
	     label ="Nehemie"
	     title = "software"
	     picture ="/zozor.png"

	/>
	</ThemeProvider>
	)


	 const titre = screen.getByTestId('title')
	 fireEvent.click(titre)
	 expect(titre.textContent).toEqual(`⭐️software⭐️`)
})
	

})