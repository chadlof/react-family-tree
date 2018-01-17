import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Caleb Austin Calixto',
        birthDate: 'July 27, 2005 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

