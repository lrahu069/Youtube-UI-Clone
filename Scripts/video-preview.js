import { videoPreviews } from "../Data/video-preview-data.js";

const videoGrid = document.querySelector('.video-grid-js');
videoPreviewRender();

function videoPreviewRender(){
  let html = '';
  videoPreviews.forEach(videoPreview => {
    html = html + `
    <div class="video-preview">
            
      <div class="thumbnail-row">
        <img class="thumbnail" src="${videoPreview.thumbnail}">
        <div class="video-time">${videoPreview.videoTime}</div>
      </div>
      
      <div class="video-info-grid">
      
        <div class="channel-pic">
          <img class="profile-picture" src="${videoPreview.profilePic}">
        </div>
        
        <div class="video-info">
          <p class="video-title">${videoPreview.videoTitle}</p>
          <p class="video-author">${videoPreview.videoAuthor}</p>
          <p class="vidoe-stats">${videoPreview.videoStats}</p>
        </div>
        
      </div>
      
    </div>`;
  });

  videoGrid.innerHTML = html;
  console.log(html);
}