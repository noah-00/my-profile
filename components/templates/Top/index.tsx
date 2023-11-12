import { useTranslation } from '@/app/i18n/index'

type TypeProps = {
  lng: string
}

export const Top = async (props: TypeProps) => {
  const { t } = await useTranslation(props.lng, 'main')

  return (
    <div className="h-[85vh] flex justify-center items-center stack">
      <div className="space-y-3">
        <p className="text-primary">Hi, my name is</p>
        <h1 className="text-[60px] font-bold text-secondary">Naoya Ishizaka</h1>
        <h2 className="text-[30px] font-semibold">Web developer</h2>
        <p>
          {t('top.introduction-1')}
          <br />
          {t('top.introduction-2')}
        </p>
        <div className="pt-10">
          <button className="btn btn-outline btn-primary">{t('top.resume')}</button>
        </div>
      </div>
    </div>
  )
}
