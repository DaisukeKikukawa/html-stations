function getData() {
    // これから作ろうとしているもので、JavaScriptでフルネームを生成する必要が出てきました。
    // ただ現状持っている情報では、名前と苗字をそれぞれのみしかありません。
    // そのため、JavaScriptで連結させて生成することにしました。
    const test = [
        { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
        { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
    ];
    return test.map(buildFullName)

    // return test.map((data) => {
    //   const newData = { ...data };
    //   newData.full_name = newData.family_name + " " + newData.first_name;
    //   return newData;
    // });
}

function buildFullName(data) {
    // Station14の問題はこちらです。想定する答えをここを書いてください。
    // 氏名がわかるようにしつつ、半角スペースで繋いでください。
    // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること
    const newData = { ...data };
    // full_nameプロパティを追加（family_name + 半角スペース + first_name）
    newData.full_name = newData.family_name + " " + newData.first_name;
    return newData;
}

// 出力が想定される答え
// const test = [
//     {id: 1, full_name: '大木 優', first_name: '優', family_name: '大木',affiliation: 'TechTrain', is_student: false},
//     {id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田',affiliation: 'HogeHoge大学', is_student: true}
// ];
