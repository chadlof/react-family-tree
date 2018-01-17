import FamilyMemberPage from '../../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Adam Thomas Calixto Gomez    ',
        birthDate: '1/5/2011'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

