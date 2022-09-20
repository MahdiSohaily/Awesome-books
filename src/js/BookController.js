function append(index, { title, author }) {
  return `
          <tr>
            <th>${Number(index) + 1}</th>
            <td>${title}</td>
            <td>${author}</td>
            <td class="actions">
              <a class="icon" href="#">
                <img width="20" height="20" src="./src/icon/edit-icon.svg" alt="edit-icon">
              </a>
              <a class="icon" href="#">
                <img width="20" height="20" src="./src/icon/delete-icon.svg" alt="delete-icon">
              </a>
            </td>
          </tr>`;
}


export default { append, checkStorage };
