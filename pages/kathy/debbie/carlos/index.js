import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Carlos Alberto Calixto          ',
        birthDate: '11/16/1984 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

