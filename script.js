function openModal(team) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // Set the title and description based on the team clicked
    switch (team) {
        case 'Mercedes':
            modalTitle.innerText = 'Mercedes';
            modalDescription.innerText = 'Mercedes-AMG Petronas Formula One Team is a British Formula One racing team that competes in the Formula One World Championship.';
            break;
        case 'Ferrari':
            modalTitle.innerText = 'Ferrari';
            modalDescription.innerText = 'Scuderia Ferrari is the racing team division of luxury sports car manufacturer Ferrari, and is the most successful team in Formula One history.';
            break;
        case 'Red Bull Racing':
            modalTitle.innerText = 'Red Bull Racing';
            modalDescription.innerText = 'Red Bull Racing is a Formula One racing team based in Milton Keynes, England, and is owned by the energy drink company Red Bull.';
            break;
        case 'McLaren':
            modalTitle.innerText = 'McLaren';
            modalDescription.innerText = 'McLaren Racing is a British motor racing team based in Woking, Surrey, England, and is one of the most successful teams in Formula One.';
            break;
        default:
            modalTitle.innerText = 'Team Name';
            modalDescription.innerText = 'Description of the team will go here.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}