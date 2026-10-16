export default function PersonalData({ classes, profile }) {
  return (
    <>
      <section className={classes.userInfo}>
        <h3>Личные данные</h3>
        <p>
          <strong>Фамилия:</strong> {profile?.lastName}
        </p>
        <p>
          <strong>Имя:</strong> {profile?.firstName}
        </p>
        <p>
          <strong>Отчество:</strong>{" "}
          {profile?.hasNoMiddleName ? "Отсутствует" : profile?.middleName}
        </p>
        <p>
          <strong>Дата рождения:</strong> {profile?.birthDate}
        </p>
        <p>
          <strong>Электронная почта:</strong> {profile?.email}
        </p>
      </section>
    </>
  );
}
