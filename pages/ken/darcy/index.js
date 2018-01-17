import FamilyMemberPage from '../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Darcy "Croppe"/ Warner      ',
        birthDate: '7/9/1981'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

