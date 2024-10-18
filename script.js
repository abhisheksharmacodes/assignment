
let selected = 2   // referring to selected option

// References to dom elements

let opt1 = document.getElementById('option1')
let opt2 = document.getElementById('option2')
let opt3 = document.getElementById('option3')

let content1 = opt1.innerHTML
let content2 = opt2.innerHTML
let content3 = opt3.innerHTML

// Content to be appended when an option is selected

let content = `
<table>
    <tr  class="first_child">
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
                <option value="Black">Colour</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
            </select>
        </td>
    </tr>
</table>
`

// Handling clicks on options for appending content and checking radioboxes respectively

opt2.innerHTML = content2 + content
document.getElementById('unit_2').setAttribute('checked', 'checked')

opt1.onclick = () => {
    if (selected !== 1) {
        undo()
        opt1.innerHTML = content1 + content
        document.getElementById('unit_1').setAttribute('checked', 'checked')
        selected = 1
    }
}
opt2.onclick = () => {
    if (selected !== 2) {
        undo()
        opt2.innerHTML = content2 + content
        document.getElementById('unit_2').setAttribute('checked', 'checked')
        selected = 2
    }
}
opt3.onclick = () => {
    if (selected !== 3) {
        undo()
        opt3.innerHTML = content3 + content
        document.getElementById('unit_3').setAttribute('checked', 'checked')
        selected = 3
    }
}

// Function for undoing appends and radiobox checks

let undo = () => {
    opt1.innerHTML = content1
    opt2.innerHTML = content2
    opt3.innerHTML = content3
    document.getElementById('unit_1').removeAttribute('checked')
    document.getElementById('unit_2').removeAttribute('checked')
    document.getElementById('unit_3').removeAttribute('checked')
}