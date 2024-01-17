//your JS code here. If required.
function handleInput(currentInput)
{
	const inputValue = document.getElementById(`input${currentInput}`).value; // use backticks (`) not single quotes (' ')
	if(inputValue !== '')
	{
		if(currentInput < 6) // you should check currentInput, not inputValue
		{
			const nextInput = currentInput + 1;
			document.getElementById(`input${nextInput}`).focus();
			document.getElementById(`input${nextInput}`).removeAttribute('disabled');
		}
	}
}

function handleKeyDown(currentInput)
{
	const currentInputElement = document.getElementById(`input${currentInput}`); // use backticks (`) not single quotes (' ')
	
	if(event.key === 'Backspace' && currentInput > 1)
	{
		const prevInput = currentInput - 1;
		const prevInputElement = document.getElementById(`input${prevInput}`);
		currentInputElement.value = '';
		prevInputElement.focus();
		prevInputElement.removeAttribute('disabled');
	}

	
}