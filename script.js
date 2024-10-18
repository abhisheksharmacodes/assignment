let selected = 2;   // indicator of selected option

// References to dom elements 

const options = document.getElementById('container');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const content1 = options.querySelector('#option1').innerHTML;
const content2 = options.querySelector('#option2').innerHTML;
const content3 = options.querySelector('#option3').innerHTML;

// size and color option to be appended to option when clicked
const content = `
  <table>
    <tr class="first_child">
      <td></td>
      <td>Size</td>
      <td>Color</td>
    </tr>
    <tr>
      <td class="first_child">#1</td>
      <td>
        <select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </td>
      <td>
        <select>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
        </select>
      </td>
    </tr>
    <tr>
      <td class="first_child">#2</td>
      <td>
        <select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </td>
      <td>
        <select>
          <option value="Black">Colour</option> <option value="White">White</option>
          <option value="Blue">Blue</option>
        </select>
      </td>
    </tr>
  </table>
`;

option2.innerHTML = content2 + content   // initializing the size and color options

options.addEventListener('click', (event) => {      // Handling clicking on boxes to append size and color options and checking respective radio box 
    const clickedOption = event.target.closest('.options');     // selecting the closest element having option class closest to the clicked element
    if (!clickedOption) return;

    if (clickedOption.id !== `option${selected}`) {
        undo();
        // appending the size and color options and selecting radio box
        clickedOption.innerHTML = (clickedOption.id === 'option1' ? content1 : clickedOption.id === 'option2' ? content2 : content3) + content;
        document.getElementById('unit_1').checked = clickedOption.id == 'option1'
        document.getElementById('unit_2').checked = clickedOption.id == 'option2'
        document.getElementById('unit_3').checked = clickedOption.id == 'option3'
        selected = parseInt(clickedOption.id.slice(6));
    }
});

function undo() {   // for undoing the changes such as content appendation and radiobox selection
    option1.innerHTML = content1;
    option2.innerHTML = content2;
    option3.innerHTML = content3;
    document.getElementById('unit_1').checked = false;
    document.getElementById('unit_2').checked = false;
    document.getElementById('unit_3').checked = false;
}