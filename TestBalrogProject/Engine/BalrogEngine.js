/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GLOBAL VARS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------------------------------------------
var m_timeAtLastFrame   = new Date().getTime();
var m_idealTimePerFrame = 1000 / 30;
var m_leftover          = 0.0;
var m_frames            = 0;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------------------------------------------
function RunApplication() {

    setInterval(TickEngine, 1000 / 30);
}


//---------------------------------------------------------------------------------------------------------------------------
function TickEngine() {

    var timeAtThisFrame = new Date().getTime();
    var timeSinceLastDoLogic = (timeAtThisFrame - m_timeAtLastFrame) + leftover;
    var catchUpFrameCount  = Math.floor(timeSinceLastDoLogic / m_idealTimePerFrame);

    for (i = 0; i < catchUpFrameCount; i++) {
        Update();
        frames++;
    }

    renderer.renderScene();
    
    leftover = timeSinceLastDoLogic - (catchUpFrameCount * m_idealTimePerFrame);
    m_timeAtLastFrame = timeAtThisFrame;
}