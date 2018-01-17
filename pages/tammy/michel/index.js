import FamilyMemberPage from '../../components/WOMarriageAndChild'


const info = {
    marriageDate: null,
    familyMember: {
        name: 'Michel Vernon Doege',
        birthDate: 'January 2, 1997'
    },
    spouse: {
        name: null
    },
    children: [
        { name: null}
    ],
    stepChildren: [
        { name: null}
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

