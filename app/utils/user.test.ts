const user = {
    name: 'Kim',
    age: 25,
    contact: {
        email: 'kim@example.com',
        phone: '010-1234-5678'
    },
    hobbies: ['reading', 'gaming', 'coding']
};


const fetchUserData = async (id: number) => {
    if (id <= 0) {
        throw new Error('Invalid ID');
    }
    return {
        id,
        name: 'User ' + id,
        isActive: true
    };
};


export function processArray(arr: number[]){
    if(!Array.isArray(arr) || arr.length === 0) return null;
    return{
        sum: arr.reduce((a, b) => a + b),
        average: arr.reduce((a, b) => a + b) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr)
    }
}

test('정상적인 배열 입력에 대해 올바른 결과 객체를 반환하는지 확인', () => {
    const result = processArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(
        expect.objectContaining({
            sum: 15,
            average: 3,
            max: 5,
            min: 1
        }),
    );
});

test('빈 배열에 대해 null을 반환하는지 확인', () => {
    expect(processArray([])).toBeNull();
});

test('배열이 아닌 입력에 대해 null을 반환하는지 확인', () => {
    expect(processArray('not an array' as any)).toBeNull();
});

test('결과 객체가 예상한 모든 속성을 포함하는지 테스트(toHaveProperty)', () => {
    const result = processArray([1, 2, 3, 4, 5]);
    expect(result).toHaveProperty('sum');
    expect(result).toHaveProperty('average');
    expect(result).toHaveProperty('max');
    expect(result).toHaveProperty('min');
});

test('유효한 ID로 호출 시 올바른 데이터가 반환되는지 확인', async () => {
    await expect(fetchUserData(1)).resolves.toEqual(
        expect.objectContaining({
            id: 1,
            name: 'User 1',
            isActive: true
        }),
    );
});


test('잘못된 ID로 호출 시 오류가 발생하는지 확인', async () => {
    await expect(fetchUserData(-1)).rejects.toThrow('Invalid ID');
});

test('반환된 객체가 올바른 속성(id, name, isActive)을 가지고 있는지 확인', async () => {
    const userData = await fetchUserData(1);
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('name');
    expect(userData).toHaveProperty('isActive');
});


test('user 객체에 이름과 연락처 속성이 있고, 이름이 kim이며 contact 속성 내부에는 email이 있고, 이메일 형식이 올바른지',
    () => {
    expect(user).toEqual(
        expect.objectContaining({
            name: 'Kim',
            contact: expect.objectContaining({
                email: expect.stringMatching(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
            }),
        }),
    );
});


test('user 객체에 contact 속성이 있고, 이메일이 kim@example.com이며, 취미 목록에 coding이 포함되어 있는지 확인', () => {
    expect(user).toEqual(
        expect.objectContaining({
            contact: expect.objectContaining({
                email: 'kim@example.com',
            }),
            hobbies: expect.arrayContaining(['coding']),
        }),
    );
});

//extend 확장 사용
test('사용자 나이가 20 ~ 30사이인지 확인', () => {
    expect(user.age).toBeWithin(20, 30);
});
