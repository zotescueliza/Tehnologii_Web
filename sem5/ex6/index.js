const apiUrl = 'http://localhost:8000/api/'

async function get(url) {
    return (await axios.get(url)).data
}

async function post(url, body) {
    return (await axios.post(url, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })).data
}

async function loadTable() {
    let data = await get(apiUrl + "getList")
    let tableDiv = document.getElementById('tableData')

    if (!data || !tableDiv) {
        return
    }
    let myTable = document.getElementById('myTable')
    if (myTable)
        myTable.remove
    let myHtmlCode = []
    myHtmlCode.push("<table id='myTable' >")
    myHtmlCode.push('<thead>')
    myHtmlCode.push('<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th> </tr>')
    myHtmlCode.push('</thead>')
    myHtmlCode.push('<tbody>')

    for (let item of data)
        myHtmlCode.push(`<tr> <td hidden> 
    ${item.id} </td> <td> ${item.name} </td> <td> ${item.age} </td> </tr>`)

    myHtmlCode.push('</tbody>')
    myHtmlCode.push('</table>')

    tableDiv.innerHTML = myHtmlCode.join("")
}

async function sendData() {
    let name = document.getElementById('inputName').value
    let age = document.getElementById('inputAge').value

    if (!name || !age) {
        alert('You must enter a name and a age')
        return
    }

    await post(apiUrl + "postList", { name: name, age: age })
    await loadTable()

}
//exercitiu
async function getPersonById() {
  let id = document.getElementById("inputId").value;

  if (!id) {
    alert("Introdu un ID!");
    return;
  }

  try {
    const response = await axios.get(apiUrl + "getList/" + id);
    const persoana = response.data;

    document.getElementById("result").innerHTML = `
      <p><b>ID:</b> ${persoana.id}</p>
      <p><b>Nume:</b> ${persoana.name}</p>
      <p><b>Vârstă:</b> ${persoana.age}</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML =
      "<p style='color:red;'>Persoana nu a fost găsită!</p>";
  }
}

loadTable()