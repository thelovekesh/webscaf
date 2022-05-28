import {expect, test} from '@oclif/test'

process.env.NODE_ENV = 'development'

describe('help', () => {
  test
  .stdout()
  .command(['help'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('VERSION')
  })
})
