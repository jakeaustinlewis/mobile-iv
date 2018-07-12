// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/phlebor'
    
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:  `//zgvhjcymlhgcna:05f3096e2a3b3a08b509a218b98208ee71524791bc6e0fd2023b05026b3f3ff6@ec2-54-221-207-184.compute-1.amazonaws.com:5432/dfaj1tme9qqfr5`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
