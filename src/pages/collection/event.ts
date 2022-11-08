import { CatPreview } from "@/apis/community/community-components"

export function onClickCatBox (id: string) {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`
  })
}

export function onClickCollect (cat: CatPreview) {
  cat.isCollected = !cat.isCollected
}
